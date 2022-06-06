const BobTransformer = (parseTree) => {
  const vertices = parseTree.meshData.vertices.map(({pos, uv, norm}) => ({
    pos, uv, norm
  }))
  const faces = parseTree.meshData.faces.map(({indices}) => (indices))
  return {
    vertices,
    faces
  }
}

export default BobTransformer