const router = require('express').Router();

router.get('/', (_, res) => {
  /*
    #swagger.tags = ['Customers']
    #swagger.summary = 'GET customers listing'
    #swagger.description = 'GET customers listing'
  */
  res.send('respond with a resource');
});

module.exports = router;
