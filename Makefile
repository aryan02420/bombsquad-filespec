.PHONY: all javascript python

all:
	$(MAKE) javascript
	$(MAKE) python

javascript:
	kaitai-struct-compiler -t javascript --outdir=javascript/importer/ src/bob.ksy
	kaitai-struct-compiler -t javascript --outdir=javascript/importer/ src/cob.ksy
	kaitai-struct-compiler -t javascript --outdir=javascript/importer/ src/brp.ksy

python:
	kaitai-struct-compiler -t python --outdir=python/importer/ src/bob.ksy
	kaitai-struct-compiler -t python --outdir=python/importer/ src/cob.ksy
	kaitai-struct-compiler -t python --outdir=python/importer/ src/brp.ksy

