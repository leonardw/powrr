var powrr = require('./powrr');

// add jobs
//var job0 = {name:"job0"},
//	job1 = {name:"job1"},
//	job2 = {name:"job2"},
//	job3 = {name:"job3"};
var job0 = "job0",
	job1 = "job1",
	job2 = "job2",
	job3 = "job3";

var jobIds = powrr.add([
	{meta:job0, weight:10},
	{meta:job1, weight:30},
	{meta:job2, weight:100},
	{meta:job3, weight:60}
]);
//console.log('jobIds:', jobIds);

//var jobList = powrr.list();
//console.log('jobList:', jobList);
//
//var remainingJobList = powrr.remove([ job0, job2 ]);
//console.log('remainingJobList:', remainingJobList);

var nextJob = powrr.next();
console.log('nextJob:', nextJob);
var nextJob = powrr.next();
console.log('nextJob:', nextJob);
var nextJob = powrr.next();
console.log('nextJob:', nextJob);
var nextJob = powrr.next();
console.log('nextJob:', nextJob);


