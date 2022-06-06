.PHONY: all javascript python

all:
	$(MAKE) javascript
	$(MAKE) python

javascript:
	kaitai-struct-compiler -t javascript --outdir=javascript/src/importer/byteParser src/bob.ksy
	kaitai-struct-compiler -t javascript --outdir=javascript/src/importer/byteParser src/cob.ksy
	kaitai-struct-compiler -t javascript --outdir=javascript/src/importer/byteParser src/brp.ksy
	for file in javascript/src/importer/byteParser/*.js; \
	do \
  	mv "$$file" "$${file%.js}.cjs"; \
	done;

python:
	kaitai-struct-compiler -t python --outdir=python/importer/ src/bob.ksy
	kaitai-struct-compiler -t python --outdir=python/importer/ src/cob.ksy
	kaitai-struct-compiler -t python --outdir=python/importer/ src/brp.ksy

