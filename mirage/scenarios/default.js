import moment from 'moment';

export default function(server) {
  server.create('email', {
    id: 1,
    from: 'recruiter@startup.com',
    to: 'dev@me.com',
    subject: 'Opportunity',
    body: 'I have a job for you :)',
    sentAt: moment(new Date()).subtract(2, 'minute').toDate(),
    readDate: null,
    tags: ['starred'],
  });

  server.create('email', {
    id: 2,
    from: 'super_recruiter@startup.com',
    to: 'dev@me.com',
    subject: 'NEW JOB OPPORTUNITY!!!',
    body: 'I have a BETTER job for you! :)',
    sentAt: moment(new Date()).subtract(1, 'day').toDate(),
    readDate: null,
    tags: ['trashed'],
  });
}
