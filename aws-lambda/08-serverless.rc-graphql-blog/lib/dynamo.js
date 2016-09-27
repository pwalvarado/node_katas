import Promise from 'bluebird';
import AWS from 'aws-sdk';
import env from '../env';

const dynamoConfig = {
  // sessionToken:    process.env.AWS_SESSION_TOKEN,
  region: process.env.AWS_REGION,
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
};
const docClient = new AWS.DynamoDB.DocumentClient(dynamoConfig);
const stage = env.SERVERLESS_STAGE;
const projectName = env.SERVERLESS_PROJECT;
const postsTable = projectName + '-' + stage + '-posts';
const authorsTable = projectName + '-' + stage + '-authors-';
const commentsTable = projectName + '-' + stage + '-comments-';

export function createPost(post) {
  return new Promise(function (resolve, reject) {
    var params = {
      TableName: postsTable,
      Item: post,
    };

    docClient.put(params, function (err, data) {
      if (err) return reject(err);
      return resolve(post);
    });

  });
}

export function getPosts() {
  return new Promise(function (resolve, reject) {
    var params = {
      TableName: postsTable,
      AttributesToGet: [
        'id',
        'title',
        'author',
        'bodyContent',
      ],
    };

    docClient.scan(params, function (err, data) {
      if (err) return reject(err);
      return resolve(data['Items']);
    });

  });
}

export function getAuthor(id) {
  return new Promise(function (resolve, reject) {
    var params = {
      TableName: authorsTable,
      Key: {
        id: id,
      },
      AttributesToGet: [
        'id',
        'name',
      ],
    };

    docClient.get(params, function (err, data) {
      if (err) return reject(err);
      return resolve(data['Item']);
    });

  });
}

export function getAuthors() {
  return new Promise(function (resolve, reject) {
    var params = {
      TableName: authorsTable,
      AttributesToGet: [
        'id',
        'name',
      ],
    };

    docClient.scan(params, function (err, data) {
      if (err) return reject(err);
      return resolve(data['Items']);
    });

  });
}

export function getComments() {
  return new Promise(function (resolve, reject) {
    var params = {
      TableName: commentsTable,
      AttributesToGet: [
        'id',
        'content',
        'author',
      ],
    };

    docClient.scan(params, function (err, data) {
      if (err) return reject(err);
      return resolve(data['Items']);
    });

  });
}
