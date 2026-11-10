#/usr/bin/env python3

import matplotlib.pyplot as plt
import numpy as np

# Generate data
x = np.linspace(0, 2 * np.pi, 100)
y = np.sin(x)

# Create the plot
plt.plot(x, y, label='sin(x)', color='blue', linewidth=2)

# Add labels and title
plt.xlabel('x')
plt.ylabel('y')
plt.title('Sine Wave')
plt.legend()
plt.grid(True)

# Display the plot
plt.show()