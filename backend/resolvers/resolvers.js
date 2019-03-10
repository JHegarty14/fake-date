const psql = require('./psqlAdapter').psql;

// one function per endpoint
exports.getAllResolver = {
  Query: {
    users(_, args, ctx) {
      const usersQuery = `select id, name, bio, age, location, job, img from users where id != ${args.id}`;
      return psql.manyOrNone(usersQuery);
    }
  }
};

exports.getMatchesResolver = {
  Query: {
    matches(_, args, ctx) {
      const matchesQuery = `select users.id, users.name, users.bio, users.age, users.location, users.job, 
                            users.img, matches.date from users
                            inner join matches on matches.personA = ${args.id}
                            inner join matches on matches.personB = ${args.id}
                            where matched = true`;
      return psql.manyOrNone(matchesQuery);
    }
  }
};

exports.insertUser = {
  Query: {
    users(_, args, ctx) {
      const usersInsert = `insert into users (id, name, bio, age, location, job, img) values (${args.id}, ${args.name}, ${args.bio}, ${args.age}, ${args.location}, ${args.job}, ${args.img})`;
      return psql.manyOrNone(usersInsert);
    }
  }
}

exports.insertMatch = {
  Query: {
    matches(_, args, ctx) {
      const matchesInsert = `insert into matches (id, personA, personB, date, matched)
                             values (${args.id}, ${args.personA}, ${args.personB}, ${args.date}, false)
                             ON CONFLICT (id) DO UPDATE 
                             SET matched = true`;
      return psql.manyOrNone(matchesInsert);
    }
  }
}