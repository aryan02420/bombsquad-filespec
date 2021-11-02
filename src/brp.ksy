meta:
  id: bombsquad_brp
  application: BombSquad
  file-extension: brp
  endian: le
seq:
  - id: header
    type: header

types:
  header:
    seq:
      - id: magic
        contents: [0x25, 0x47, 0x01, 0x00]
        doc: BRP MAGIC 83749

