let deq=[];

var MyQueue = function() {
    deq=[];
};

MyQueue.prototype.push = function(x) {
    deq.push(x);
};

MyQueue.prototype.pop = function() {
    return deq.shift();
};

MyQueue.prototype.peek = function() {
    return deq[0];
};

MyQueue.prototype.empty = function() {
    return !deq.length;
};