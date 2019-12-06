const graphql = require('graphql');
const dbservice = require('../services/dbservice.js');
const { MemberType } = require('../types/index.js')


const MemberResolver = {
  type: new graphql.GraphQLList(MemberType),
  args: { id: { type: graphql.GraphQLID } },
  resolve: async (parent, args, context, resolveInfo) => {
    const conn = dbservice.getConnection();
    const { Member } = conn.models;
    if(args.id) return [Member.findOne({ where: { id: args.id } })];
    return Member.findAll();
  }
}

module.exports = MemberResolver;
