const CobTransformer = (parseTree) => {
  const vertices = parseTree.meshData.vertices.map(({pos}) => (pos))
  const faces = parseTree.meshData.faces.map(({indices}) => (indices))
  const normals = parseTree.meshData.normals.map(({dir}) => (dir))
  return {
    vertices,
    faces,
    normals
  }
}

export default CobTransformer