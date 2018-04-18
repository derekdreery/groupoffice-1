(function () {
  
  var entities = {};
  var stores = {};
  
  go.Entities = {

    /**
     * Register an entity
     * 
     * this will create a global entity and store:
     * 
     * go.Stores.get("name")]
     * go.Entities.get(name)
     * 
     * @param {string} name
     * @param {object} jmapMethods
     * @returns {undefined}
     */
    register: function (package, module, name) {
      if(entities[name]) {
        throw "Entity name is already registered by module " +entities[name]['package'] + "/" + entities[name]['name'];
      }
      
      entities[name.toLowerCase()] = {
        name: name,
        module: module,
        package: package,
        goto: function (id) {
          go.Router.goto(this.name.toLowerCase() + "/" + id);
        }
      };     
    },

    get: function (name) {      
      return entities[name.toLowerCase()];      
    },
    
    getAll() {
      return entities;
    }
  };
  
  
  go.Stores = {
    get: function (name) {
      
      name = name.toLowerCase();
     
      if(!stores[name]) {
        stores[name] = new go.data.EntityStore({
          entity: go.Entities.get(name)
        });
      }
      
      return stores[name];
    }
  }

})();