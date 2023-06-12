db = (new Mongo("localhost:27017")).getDB("appsmith");
config = {
"_id" : "replicaSet",
"members" : [
  {
    "_id" : 0,
    "host" : "mongo1:27017"
  },
  {
    "_id" : 1,
    "host" : "mongo2:27017"
  },
  {
    "_id" : 2,
    "host" : "mongo3:27017"
  }
]
};
rs.initiate(config);
