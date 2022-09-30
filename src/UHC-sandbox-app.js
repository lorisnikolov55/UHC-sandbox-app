(function(window){
    window.extractData = function() {
      var ret = $.Deferred();
  
      function onError() {
        console.log('Loading error', arguments);
        ret.reject();
      }
  
      function onReady(smart)  {
        if (smart.hasOwnProperty('patient')) {
          var patient = smart.patient;
          var pt = patient.read();
          var patient = smart.patient.api.fetchAll({
            type: 'Observation',
          });
  
          $.when(pt).fail(onError);
  
          $.when(pt).done(function(patient) {
            var gender = patient.gender;
  
            var fname = '';
            var lname = '';
  
            if (typeof patient.name[0] !== 'undefined') {
              fname = patient.name[0].given[0];
              lname = patient.name[0].family;
            }
  
            var p = defaultPatient();
            p.birthdate = patient.birthDate;
            p.gender = gender;
            p.fname = fname;
            p.lname = lname;
  
            ret.resolve(p);
          });
        } else {
          onError();
        }
      }
  
      FHIR.oauth2.ready(onReady, onError);
      return ret.promise();
  
    };
  
    function defaultPatient(){
      return {
        fname: {value: ''},
        lname: {value: ''},
        gender: {value: ''},
        birthdate: {value: ''},
      };
    }
  
    function getQuantityValueAndUnit(ob) {
      if (typeof ob != 'undefined' &&
          typeof ob.valueQuantity != 'undefined' &&
          typeof ob.valueQuantity.value != 'undefined' &&
          typeof ob.valueQuantity.unit != 'undefined') {
            return ob.valueQuantity.value + ' ' + ob.valueQuantity.unit;
      } else {
        return undefined;
      }
    }
  
    window.drawVisualization = function(p) {
      $('#holder').show();
      $('#loading').hide();
      $('#fname').html(p.fname);
      $('#lname').html(p.lname);
      $('#gender').html(p.gender);
      $('#birthdate').html(p.birthdate);
    };
  })(window);
  