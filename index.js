const express = require('express')
const graphqlHTTP = require('express-graphql')
const graphql = require('graphql')

const dbservice = require('./services/dbservice.js');
const resolvers = require('./resolvers/index.js');

async function main() {
  await dbservice.start();

  const QueryRoot = new graphql.GraphQLObjectType({
    name: 'Query',
    fields: () => ({
      hello: {
        type: graphql.GraphQLString,
        resolve: () => "Hello world!"
      },
      ...resolvers
    })
  })

  const schema = new graphql.GraphQLSchema({ query: QueryRoot });

  const app = express();
  app.use('/api', graphqlHTTP({
    schema: schema,
    graphiql: true,
  }));
  app.listen(4000);
}
main();
