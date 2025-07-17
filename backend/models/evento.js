module.exports = (sequelize, DataTypes) => {
  const Evento = sequelize.define('Evento', {
    eventoId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    direccionLinkHTML: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    descripcionTipodeevento: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    horarioinicio: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    horarioFin: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    areaorganizadoraName: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    sedeFilialName: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    lugardeevento: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    direccion: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    tipodeevento: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    clasedeevento: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    estado: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    cdfacturacion: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    precionosocios: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: true,
    },
    preciosocios: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: true,
    },
    ndeinscritosalafecha: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    telefono: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    correo: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    banner: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    cierre: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    url: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    expositor: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    codPromocional: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    publicacion: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    dirigidoa: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    transactionCurrencyId: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    new_imagenminiatura: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    new_favorito: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    new_slider: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    new_categoria: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    new_frecuencia: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    new_duracion: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  }, {
    tableName: 'eventos',
    timestamps: false, // Deshabilita createdAt y updatedAt
  });

  return Evento;
};
