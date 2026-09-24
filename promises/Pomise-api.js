Promise.all()

// its value work parallely and give the result at a same time. After its all Users Promises is completed 

//  but if any user have error in the Promise api it imediatedly sent an error and no promise is successed then 

//  To settled this error part where all api sent the direct error if one user have error. we use this

Promise.allSettled()

// with this if have a error in any user it sent same as a response like the successed one anf where the error happen it simply sent error on that part

