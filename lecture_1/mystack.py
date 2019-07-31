stack = [] # on first import
error = 'stack1.error' # local exceptions

def push(obj):
  global stack # 'global' to change
  stack = [obj] + stack # add item to front

def pop():
  global stack
  if not stack:
    raise error, 'stack underflow' # raise local error
  top, stack = stack[0], stack[1:] # remove front item
  return top

def top():
  if not stack: # raise local error
    raise error, 'stack underflow' # or let IndexError
  return stack[0]

def empty(): return not stack # is the stack []?
def member(obj): return obj in stack # item in stack?
def item(offset): return stack[offset] # index the stack
def length(): return len(stack) # number entries
def dump(): print('<Stack:%s>' % stack)
