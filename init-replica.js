db = (new Mongo("containers-us-west-10.railway.app:6255")).getDB("test");
config = {
"_id" : "my-mongo-set",
"members" : [
  {
    "_id" : 0,
    "host" : "containers-us-west-10.railway.app:6255"
  },
  {
    "_id" : 1,
    "host" : "containers-us-west-84.railway.app:7986"
  }
]
};
rs.initiate(config);
