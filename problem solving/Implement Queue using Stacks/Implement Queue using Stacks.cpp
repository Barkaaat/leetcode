class MyQueue {
private:
    deque<int> d;
public:
    MyQueue() {
        
    }
    
    void push(int x) {
        d.push_back(x);
    }
    
    int pop() {
        int x=d.front();
        d.pop_front();
        return x;
    }
    
    int peek() {
        return d.front();
    }
    
    bool empty() {
        return d.size() < 1;
    }
};