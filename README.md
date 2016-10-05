# illustration-for-filtering-dom-elements---1

#####*Functionality Overview*

*It is really simple to work with that program I suppose. Just click the button and see what will happen. That filter the table according to the color of lines.*

*If you click “All” you shall see all records.*

#**[Working demo](https://jsfiddle.net/hellyeah/my3dd968/embedded/result/) -> it is just simple demo, needs to be modified.**

*(it will be hosted on actual domain soon.)*

#####*Semantic Overview*

*In this piece of code, we aim to filter table according to the color of the line. So when you click the button “any colour you want” you will see the only filtered records.*

*Actually, this development is part of monitoring software. Each colour has its own meaning. Let summarise it below.*

No | Color | Short Explanation | Case 1 | Case 2
--- | --- | --- | --- | --- 
1 | Red | Failure | When the request is not completed and we don’t get a clear response. | There is timeout column in definition table if request dont happen in the range of timeout. It is other reason we dont get response in return.  
2 | Orange | Performance Problem | Compare the last time difference column with other time difference columns by taking average of them. Time differences are  calculated with the operation described below. Request time (actual time) - Response Time (Actual Time) = Time Difference. | I hold all information in the definition table. Thanks to those data, I do request. Also, each URL has its own threshold. If response time - request time is bigger than a threshold. It signifies that performance problem occurred. In my design, the threshold is the limit that we set for measuring and ensuring our response time is decent.
3 | Blue | Inactive | it means precisely “we are not doing any request at that moment” So it is not controlled.* The mechanism of “inactive” record is like below. In definition table, there is a specific column called “inactive” which is bit value 1 or 0. When you do “0” records seem blue “inactive | 
4 | Gray | Out of date | Concisely if the colour of record is grey. That means there is a serious problem in the system. Because there is no new record/records. Comparing the last request time and actually time would be enough to determine this problem. In my design, there are two columns in definition table that are SleepTime and Timeout. The working environment of this app. is multithreaded. SleepTime is just a time approximately 1000ms for taking thread into “sleep state”. Whereas Timeout is a duration time that how to time the request last. The calculation for emphasising the record is out of date is mentioned below. Current Time - Last request time > (timeout + sleep time) * 5 The record is out of date | Another solution  just set timing limit like 15 mins and check if the difference between currenttime and last request time is bigger or smaller than this timing limits
5 | Green | Success | When the request is done and we get a proper response with necessary information that you can see on the table. | ...



