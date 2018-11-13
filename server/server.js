// Constants
const DB_ROUTE = 'bolt://localhost:7687'

const neo4j = require('neo4j-driver');
const express = require('express');
const bodyParser = require('body-parser');

const driver = neo4j.v1.driver(DB_ROUTE, neo4j.v1.auth.basic('neo4j', 'neo4j'));
const session = driver.session();
console.log(session);
