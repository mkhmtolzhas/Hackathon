from sqlalchemy import MetaData, Table, Column, Integer, String, TIMESTAMP, Boolean

from datetime import datetime

metadata = MetaData()


user = Table(
    "user", 
    metadata, 
    Column("id", Integer, primary_key=True),
    Column("email", String, nullable=False),
    Column("hashed_password", String, nullable=False),
    Column("registered_at", TIMESTAMP, default=datetime.utcnow()),
    Column("is_active", Boolean, default=True, nullable=False),
    Column("is_superuser", Boolean, default=False, nullable=False),
    Column("is_verified", Boolean, default=False, nullable=False)
)