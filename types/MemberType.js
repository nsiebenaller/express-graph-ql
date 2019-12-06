const graphql = require('graphql');
const TagType = require('./TagType.js');
const dbservice = require('../services/dbservice.js');

const MemberType = new graphql.GraphQLObjectType({
  name: 'members',
  fields: () => ({
    id: { type: graphql.GraphQLString },
    first_name: { type: graphql.GraphQLString },
    last_name: { type: graphql.GraphQLString },
    tags: {
      type: new graphql.GraphQLList(TagType),
      resolve: (parent, args, context, resolveInfo) => {
        const conn = dbservice.getConnection();
        const { Tag, Member } = conn.models;
        return Tag.findAll({
          where: {  "$Member.id$": parent.dataValues.id },
          include: [{
              model: Member,
              as: 'Member',
              through: 'MemberTags',
              required: false
          }]
        })
      }
    }
  })
});

module.exports = MemberType;
