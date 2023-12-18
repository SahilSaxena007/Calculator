# File to implement Calculator Function
from tkinter import Entry, StringVar, Button

# Parent Class
from typing import Any


class widget:
    # Creating all the widgets
    def __init__(self, window):
        
        self.window = window
        self.window.title('CALCULATOR')
        self.window.configure(bg = '#040707')
        self.window.resizable(0,0)
        
        # Creating the columns and rows needed
        self.window.columnconfigure(0, weight = 1)
        self.window.columnconfigure(1, weight = 1)
        self.window.columnconfigure(2, weight = 1)
        self.window.columnconfigure(3, weight = 1)
        
        self.create_widgets()
        
    def create_widgets(self):
        # Creating the Entry Widget
        value = StringVar()
        self.calc_entry = Entry(self.window, bg='#1E1E1E', font=('calibre', 12), fg='#FFFFFF',textvariable=value, width=40,borderwidth=0)
        self.calc_entry.grid(row=0, column=0, columnspan=4, padx=5, pady=5, ipady=20)
        
        # All the Buttons and it's placement
        # ROW 1
        self.button_AC = Button(self.window, text='AC', bg='#1E1E1E', font=('calibre', 8), fg='#FFFFFF', command=None)
        self.button_AC.grid(row=1, column=0, sticky='EW', padx=5, pady=5, ipady=10)
        
        self.button_root = Button(self.window, text='+/-', bg='#1E1E1E', font=('calibre', 8), fg='#FFFFFF', command=None )
        self.button_root.grid(row=1, column=1, sticky='EW',  padx=5, pady=5, ipady=10)
        
        self.button_Perc = Button(self.window, text='%', bg='#1E1E1E', font=('calibre', 8), fg='#FFFFFF', command=None )
        self.button_Perc.grid(row=1, column=2, sticky='EW',  padx=5, pady=5, ipady=10)
        
        self.button_div = Button(self.window, text='/', bg='#1E1E1E', font=('calibre', 8), fg='#FFFFFF', command=None )
        self.button_div.grid(row=1, column=3, sticky='EW',  padx=5, pady=5, ipady=10)
        
        # ROW 2
        self.button_7 = Button(self.window, text='7', bg='#1E1E1E', font=('calibre', 8), fg='#FFFFFF', command=None)
        self.button_7.grid(row=2, column=0, sticky='EW',  padx=5, pady=5, ipady=10)
        
        self.button_8 = Button(self.window, text='8', bg='#1E1E1E', font=('calibre', 8), fg='#FFFFFF', command=None )
        self.button_8.grid(row=2, column=1, sticky='EW',  padx=5, pady=5, ipady=10)
        
        self.button_9 = Button(self.window, text='9', bg='#1E1E1E', font=('calibre', 8), fg='#FFFFFF', command=None )
        self.button_9.grid(row=2, column=2, sticky='EW', padx=5, pady=5, ipady=10)
        
        self.button_mul = Button(self.window, text='x', bg='#1E1E1E', font=('calibre', 8), fg='#FFFFFF', command=None )
        self.button_mul.grid(row=2, column=3, sticky='EW', padx=5, pady=5, ipady=10)
        
        # ROW 3
        self.button_4 = Button(self.window, text='4', bg='#1E1E1E', font=('calibre', 8), fg='#FFFFFF', command=None)
        self.button_4.grid(row=3, column=0, sticky='EW',padx=5, pady=5, ipady=10)
        
        self.button_5 = Button(self.window, text='5', bg='#1E1E1E', font=('calibre', 8), fg='#FFFFFF', command=None )
        self.button_5.grid(row=3, column=1, sticky='EW', padx=5, pady=5, ipady=10)
        
        self.button_6 = Button(self.window, text='6', bg='#1E1E1E', font=('calibre', 8), fg='#FFFFFF', command=None )
        self.button_6.grid(row=3, column=2, sticky='EW', padx=5, pady=5, ipady=10)
        
        self.button_sub = Button(self.window, text='-', bg='#1E1E1E', font=('calibre', 8), fg='#FFFFFF', command=None )
        self.button_sub.grid(row=3, column=3, sticky='EW', padx=5, pady=5, ipady=10)
        
        # ROW 4
        self.button_1 = Button(self.window, text='1', bg='#1E1E1E', font=('calibre', 8), fg='#FFFFFF', command=None)
        self.button_1.grid(row=4, column=0, sticky='EW', padx=5, pady=5, ipady=10)
        
        self.button_2 = Button(self.window, text='2', bg='#1E1E1E', font=('calibre', 8), fg='#FFFFFF', command=None )
        self.button_2.grid(row=4, column=1, sticky='EW', padx=5, pady=5, ipady=10)
        
        self.button_3 = Button(self.window, text='3', bg='#1E1E1E', font=('calibre', 8), fg='#FFFFFF', command=None )
        self.button_3.grid(row=4, column=2, sticky='EW', padx=5, pady=5, ipady=10)
        
        self.button_add = Button(self.window, text='+', bg='#1E1E1E', font=('calibre', 8), fg='#FFFFFF', command=None )
        self.button_add.grid(row=4, column=3, sticky='EW', padx=5, pady=5, ipady=10)
        
        # Row 5
        self.button_0 = Button(self.window, text='0', bg='#1E1E1E', font=('calibre', 8), fg='#FFFFFF', command=None)
        self.button_0.grid(row=5, column=0, columnspan=2, sticky='EW', padx=5, pady=5, ipady=10)
        
        self.button_dot = Button(self.window, text='.', bg='#1E1E1E', font=('calibre', 8), fg='#FFFFFF', command=None )
        self.button_dot.grid(row=5, column=2, sticky='EW', padx=5, pady=5, ipady=10)
        
        self.button_equal = Button(self.window, text='=', bg='#1E1E1E', font=('calibre', 8), fg='#FFFFFF', command=None )
        self.button_equal.grid(row=5, column=3, sticky='EW', padx=5, pady=5, ipady=10)
        
    


class operation:
    # Functionalities and their operation
    pass
# Child Classes

