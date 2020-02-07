# consider the code given below
# read all comments and implement missing functions due to the instructions

import simplegui
import random

class Racket:
    _const_w = 5
    _const_h = 60
    _const_dy = 5
    
    def __init__(self, x_i, y_i, max_x, max_y):
        self.x = x_i
        self.y = y_i
        self.max_x = max_x
        self.max_y = max_y
        self.move = 0

    def draw(self, canvas):
        dx = Racket._const_w/2
        dy = Racket._const_h/2
        canvas.draw_polygon([[self.x - dx, self.y - dy], 
                             [self.x - dx, self.y + dy], 
                             [self.x + dx, self.y + dy], 
                             [self.x + dx, self.y - dy]], 
                            12, 'Red')

    def time_step(self):
        # write function that
        # moves racket by Racket._const_dy * self.move
        # handle edges correctly
        # racket should stop on the upper and lower edges

    def set_direction(self, d):
        # set self.move to given direction d
        
        
class Ball:
    _const_r = 5
    
    def __init__(self, x, y, x_max, y_max):
        self.xi = x
        self.yi = y
        self.vx = 0
        self.vy = 0
        self.x = 0
        self.y = 0
        self.x_max = x_max
        self.y_max = y_max
        
    def reset(self):
        # set self.x and self.y to initial values self.xi and self.yi
        # choose random velocity (self.vx, self.vy), make sure it is not zero
        # use random.randint(min, max) or similar function
        
    def time_step(self):
        # suppose dt = 1 has passed 
        # update position (self.x and self.y)
        # implement collision with upper and lower walls
            
    def collide(self):
        # collide with racket (change self.vx)
        
    def out(self):
        # check if the ball is outside the field (someone won)
        # return -1 for ball behind the left wall 
        # and +1 if behind the right
        # in other cases return 0
        
    def draw(self, canvas):
        canvas.draw_circle([self.x, self.y], Ball._const_r, 1, 'Green', 'Green')
        

def collide(ball, racket):
    # implement collision of ball and racket
    # call function ball.collide() if collision occured,
    # otherwise do nothing
        

class Score:
    def __init__(self, x, y):
        self.left = 0
        self.right = 0
        self.x = x
        self.y = y
        
    def left_plus(self):
        # add 1 to the left player's score self.left
        
    def right_plus(self):
        # add 1 to the right player's score self.right

    def draw(self, canvas):
        canvas.draw_text('Left: ' + str(self.left) + 
                         "; Right: " + str(self.right),
                         [self.x, self.y], 20, 'Blue')
        
        
_const_screen_w = 600
_const_screen_h = 400
r1 = Racket(10, 20, _const_screen_w, _const_screen_h)
r2 = Racket(590, 20, _const_screen_w, _const_screen_h)
b = Ball(_const_screen_w/2, _const_screen_h/2, _const_screen_w, _const_screen_h)
b.reset()
s = Score(200, 200)

def draw_handler(canvas):
    r1.draw(canvas)
    r2.draw(canvas)
    b.draw(canvas)
    s.draw(canvas)
    
def timer_handler():
    collide(b, r1)
    collide(b, r2)
    b.time_step()
    r1.time_step()
    r2.time_step()
    if b.out() > 0:
        b.reset()
        s.left_plus()
    if b.out() < 0:
        b.reset()
        s.right_plus()

def keydown(key):
    if chr(key) == 'Q':
        r1.set_direction(1)
    if chr(key) == 'W':
        r1.set_direction(-1)
    if chr(key) == 'O':
        r2.set_direction(1)
    if chr(key) == 'P':
        r2.set_direction(-1)

def keyup(key):
    if chr(key) == 'Q' or chr(key) == 'W':
        r1.set_direction(0)
    if chr(key) == 'O' or chr(key) == 'P':
        r2.set_direction(0)

    
frame = simplegui.create_frame('Tennis', 600, 400)
frame.set_draw_handler(draw_handler)
frame.set_keydown_handler(keydown)
frame.set_keyup_handler(keyup)
frame.start()
timer = simplegui.create_timer(10, timer_handler)
timer.start()    

