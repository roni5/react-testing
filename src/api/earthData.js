const earthdata = quake => ({
  id: quake.id,
  place: quake.properties.place,
  mag: quake.properties.mag,
  magType: quake.properties.magType
});

export { earthdata };
