const baseUrl = '/api/users';
let retryCount = 0;

retryCount += 1; // ok

// var leaks in ways that are harder to reason about
if (true) {
  var status = 'running';
}
console.log(status);
