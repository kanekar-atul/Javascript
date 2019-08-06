'use strict';

const AWS = require('aws-sdk')

AWS.config.update({
  region: 'us-east-1'
})

const parameterStore = new AWS.SSM()

const getParam = param => {
  return new Promise((res, rej) => {
    parameterStore.getParameter({
      Name: param
    }, (err, data) => {
        if (err) {
          return rej(err)
        }
        return res(data)
    })
  })
}

exports.handler  = async (event, context) => {
  const param = await getParam('name')
  console.log(param);
  console.log("=========$$$$$$$$$$$$$$$$###################@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@");
  return {
    statusCode: 200,
    body: JSON.stringify(param)
  };
};