var connectionString = process.env.DATABASE_URL || 'postgres://postgres:1234@localhost:5432/fishingapp'

module.exports = connectionString;
