import simplegui
import random

class Snake:
    def __init__(self, w, h):
        self.pos = []
        self.direction = []
        self.g = False
        self.w = w
        self.h = h
        
    def forward(self):
        # PART A
        # move the snake along given direction
        # e.g. let self.direction == [1, 0]
        # self.pos == [[1,2], [1,3]]
        # result should be [[2,2],[1,2]]
        # 
        # PART B
        # modify to take self.g into account
        # elongate the snake by 1 if self.g == True
        # and set self.g to false
    
    def set_direction(self, direction):
        # set self.direction to direction
        # if and only if the snake rotates 90 degrees
    
    def get_snake(self):
        return self.pos
    
    def reset(self):
        self.pos = [[10,10], [10,11]]
        self.direction = [0, -1]
        self.g = False
        
    def grow(self):
        self.g = True
        
    def head_collision(self):
        # check if the snake collided with walls or itself
        # return True if it did, False otherwise
    
    
class Apple:
    def __init__(self, w, h):
        self.pos = [0, 0]
        self.w = w
        self.h = h
        
    def reset(self):
        # generate random position on the field
        # use random.randint(min, max)
        # save to self.pos
    
    
_const_screen_w = 600
_const_screen_h = 400
_const_size = 20

snake = Snake(_const_screen_w//_const_size, _const_screen_h//_const_size)
snake.reset()
apple = Apple(_const_screen_w//_const_size, _const_screen_h//_const_size)
apple.reset()

def draw_handler(canvas):
    for n in range(_const_screen_w//_const_size):
        canvas.draw_line((n * _const_size, 0), (n * _const_size, _const_screen_h), 2, 'Green')
    for n in range(_const_screen_h//_const_size):
        canvas.draw_line((0, n * _const_size), (_const_screen_w, n * _const_size), 2, 'Green')
    for n,m in snake.get_snake():
        canvas.draw_polygon([(n * _const_size, m * _const_size), 
                             ((n+1) * _const_size, m * _const_size), 
                             ((n+1) * _const_size, (m+1) * _const_size),
                             (n * _const_size, (m+1) * _const_size)], 1, 'Yellow', 'Yellow')
    n,m = apple.pos
    canvas.draw_polygon([(n * _const_size, m * _const_size), 
                         ((n+1) * _const_size, m * _const_size), 
                         ((n+1) * _const_size, (m+1) * _const_size),
                         (n * _const_size, (m+1) * _const_size)], 1, 'Red', 'Red')
        
    
def timer_handler():
    snake.forward()
    head = snake.get_snake()[0]
    a = apple.pos
    if head[0] == a[0] and head[1] == a[1]:
        snake.grow()
        apple.reset()
    if snake.head_collision():
        snake.reset()
        apple.reset()

def keydown(key):
    _dirs = {"%":[-1, 0], "'":[+1,0], "&":[0,-1], "(":[0,+1]}
    if chr(key) in _dirs.keys():
        snake.set_direction(_dirs[chr(key)])

def keyup(key):
    pass
    
frame = simplegui.create_frame('Snake', 600, 400)
frame.set_draw_handler(draw_handler)
frame.set_keydown_handler(keydown)
frame.set_keyup_handler(keyup)
frame.start()
timer = simplegui.create_timer(200, timer_handler)
timer.start() 
