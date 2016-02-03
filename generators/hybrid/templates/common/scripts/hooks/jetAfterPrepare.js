/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
#!/usr/bin/env node

// After prepare hook implementation

var injector = require("./injector");

module.exports = function(context)
{
  var platforms = context.opts.platforms;
  
  if (platforms)
  {
    platforms.forEach(function(value)
      {
        injector.injectPlatformStyleClasses(value);
        injector.updateConfig(value);
      }
    );
  }    
};