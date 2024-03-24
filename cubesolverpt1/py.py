# Define a function to input cube sides
def input_cube_sides():
    cube_sides = {}
    sides = ['front', 'back', 'top', 'bottom', 'left', 'right']
    for side in sides:
        print(f"Enter pieces for {side} side:")
        pieces = []
        for i in range(1, 10):
            piece = input(f"Enter piece {i}: ")
            pieces.append(piece)
        cube_sides[side] = pieces
    return cube_sides

# Define a function to print cube sides in letter format
def print_cube_sides(cube_sides):
    for side, pieces in cube_sides.items():
        print(f"{side} side:")
        for i, piece in enumerate(pieces, start=1):
            print(f"{i}: {piece}")

# Main function to input and print cube sides
def main():
    cube_sides = input_cube_sides()
    print_cube_sides(cube_sides)

if __name__ == "__main__":
    main()
