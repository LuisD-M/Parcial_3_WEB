set -e

# Conectarse a la base de datos predeterminada para crear el usuario
psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" <<-EOSQL
    CREATE USER $DB_USER WITH PASSWORD '$DB_PASSWORD';
EOSQL

# Luego, conecta específicamente a la base de datos `app` para otorgar permisos
psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "app" <<-EOSQL
    GRANT CONNECT ON DATABASE app TO $DB_USER;
    GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO $DB_USER;
    GRANT ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA public TO $DB_USER;
EOSQL
