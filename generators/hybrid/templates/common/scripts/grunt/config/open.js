/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
//grunt open task

module.exports = {
  
  //open the server
  server:
  {
    url: 'http://localhost:<%= oraclejet.ports.server %>/index.html'
  }
  
};