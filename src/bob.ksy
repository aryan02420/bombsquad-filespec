meta:
  id: bombsquad_bob
  application: BombSquad
  file-extension: bob
  endian: le
seq:
  - id: header
    type: header
  - id: vertex_count
    type: vertex_count
  - id: face_count
    type: face_count
  - id: vertex_object
    type: vertex_object

types:
  header:
    seq:
      - id: magic
        contents: [0x37,0xb2,0x00,0x00]
        doc: BOB MAGIC 45623
      - id: mesh_format
        type: u4
        enum: e_mesh_format
        doc: |
          MeshFormat
          0 => MESH_FORMAT_UV16_N8_INDEX8
          1 => MESH_FORMAT_UV16_N8_INDEX16
  vertex_count:
    seq:
      - id: count
        type: u4
  face_count:
    seq:
      - id: count
        type: u4
  vertex_position:
    seq:
      - id: x
        type: f4
      - id: y
        type: f4
      - id: z
        type: f4
  vertex_uv:
    seq:
      - id: x
        type: u2
      - id: y
        type: u2
  vertex_normal:
    seq:
      - id: x
        type: s2
      - id: y
        type: s2
      - id: z
        type: s2
  vertex_object:
    seq:
      - id: pos
        type: vertex_position
      - id: uv
        type: vertex_uv
      - id: norm
        type: vertex_normal
      - id: padding
        contents: [0x00,0x00]

enums:
  e_mesh_format:
    0: index_8
    1: index_16