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
        head = [self.pos[0][0] + self.direction[0],
                self.pos[0][1] + self.direction[1]]
        if not self.g:
            self.pos = [head] + self.pos[:-1]
        else:
            self.pos = [head] + self.pos
            self.g = False
    
    def set_direction(self, direction):
        scalar_prod = self.direction[0] * direction[0] + self.direction[1] * direction[1]
        if not scalar_prod:
            self.direction = direction
    
    def get_snake(self):
        return self.pos
    
    def reset(self):
        self.pos = [[10,10], [10,11]]
        self.direction = [0, -1]
        self.g = False
        
    def grow(self):
        self.g = True
        
    def head_collision(self):
        head = self.pos[0]
        if head[0] < 0 or head[0] > self.w:
            return True
        if head[1] < 0 or head[1] > self.h:
            return True
        if head in self.pos[1:]:
            return True
        return False
    
    
class Apple:
    def __init__(self, w, h):
        self.pos = [0, 0]
        self.w = w
        self.h = h
        
    def reset(self):
        self.pos = [random.randint(0, self.w - 1),
                    random.randint(0, self.h - 1)]
    
    
    
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
