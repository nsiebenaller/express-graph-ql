const graphql = require('graphql');
const memberResolver = require('./member.js');

const Resolvers = {
  member: memberResolver
}

module.exports = Resolvers;
