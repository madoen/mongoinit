db = (new Mongo("localhost:27017")).getDB("appsmith");
config = {
"_id" : "replicaSet",
"members" : [
  {
    "_id" : 0,
    "host" : "mongo:giA0CzmQ8PeF26jdquFO@containers-us-west-10.railway.app:6255"
  },
  {
    "_id" : 1,
    "host" : "mongo:kTzJoWPUv3BfIr9MIkO5@containers-us-west-84.railway.app:7986"
  },
]
};
rs.initiate(config);
