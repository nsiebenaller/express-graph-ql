const graphql = require('graphql');

const TagType = new graphql.GraphQLObjectType({
  name: 'tags',
  fields: {
    name: { type: graphql.GraphQLString },
    color: { type: graphql.GraphQLString },
  }
});

module.exports = TagType;
