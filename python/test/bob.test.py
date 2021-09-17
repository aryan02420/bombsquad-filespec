from output.python.bombsquad_bob import BombsquadBob

# if __name__ == '__main__':
data = BombsquadBob.from_file("../../src/cube.bob")
print(data.vertex_object.pos.x)