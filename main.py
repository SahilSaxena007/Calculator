# Main Neuomorphic Calculator Calculator File
from tkinter import Tk, Entry
# Calling Function to import the actual File
from calculator import widget

if __name__=='__main__':
    window = Tk()
    calc = widget(window)
    window.mainloop()
