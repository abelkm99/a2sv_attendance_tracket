"""empty message

Revision ID: deecaec4b4fe
Revises: 
Create Date: 2023-08-14 17:41:07.361132

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = "deecaec4b4fe"
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table(
        "project",
        sa.Column("id", sa.Integer(), nullable=False),
        sa.Column("name", sa.String(length=50), nullable=False),
        sa.Column("archived", sa.Boolean(), nullable=False),
        sa.PrimaryKeyConstraint("id"),
        sa.UniqueConstraint("name"),
    )
    op.create_table(
        "user",
        sa.Column("slack_id", sa.String(length=50), nullable=False),
        sa.Column("full_name", sa.String(length=50), nullable=False),
        sa.Column("role", sa.String(length=250), nullable=False),
        sa.Column("employement_status", sa.String(length=50), nullable=False),
        sa.Column("daily_plan_channel", sa.String(length=50), nullable=False),
        sa.Column("headsup_channel", sa.String(length=50), nullable=False),
        sa.Column("check_in_check_out_channel", sa.String(length=50), nullable=False),
        sa.Column("is_admin", sa.Boolean(), nullable=True),
        sa.Column("profile_url", sa.String(length=1000), nullable=False),
        sa.Column("project_id", sa.Integer(), nullable=False),
        sa.ForeignKeyConstraint(
            ["project_id"],
            ["project.id"],
        ),
        sa.PrimaryKeyConstraint("slack_id"),
        sa.UniqueConstraint("slack_id"),
    )
    op.create_table(
        "daily_plan",
        sa.Column("id", sa.Integer(), nullable=False),
        sa.Column("slack_id", sa.String(length=50), nullable=False),
        sa.Column("channel_id", sa.String(length=50), nullable=False),
        sa.Column("time_published", sa.DateTime(), nullable=False),
        sa.Column("message_id", sa.String(length=50), nullable=False),
        sa.ForeignKeyConstraint(
            ["slack_id"],
            ["user.slack_id"],
        ),
        sa.PrimaryKeyConstraint("id"),
    )
    op.create_table(
        "time_sheet",
        sa.Column("id", sa.Integer(), nullable=False),
        sa.Column("check_in_time", sa.DateTime(), nullable=False),
        sa.Column("check_out_time", sa.DateTime(), nullable=True),
        sa.Column("slack_id", sa.String(length=50), nullable=False),
        sa.Column("project_id", sa.Integer(), nullable=False),
        sa.Column("elapsed_time", sa.Integer(), nullable=True),
        sa.Column(
            "location", sa.String(length=50), server_default="In Person", nullable=False
        ),
        sa.ForeignKeyConstraint(
            ["project_id"],
            ["project.id"],
        ),
        sa.ForeignKeyConstraint(
            ["slack_id"],
            ["user.slack_id"],
        ),
        sa.PrimaryKeyConstraint("id"),
    )
    op.create_table(
        "task",
        sa.Column("id", sa.Integer(), nullable=False),
        sa.Column("daily_plan_id", sa.Integer(), nullable=False),
        sa.Column("task", sa.String(length=200), nullable=False),
        sa.Column("type", sa.String(length=50), nullable=False),
        sa.Column("state", sa.Integer(), nullable=False),
        sa.ForeignKeyConstraint(
            ["daily_plan_id"],
            ["daily_plan.id"],
        ),
        sa.PrimaryKeyConstraint("id"),
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table("task")
    op.drop_table("time_sheet")
    op.drop_table("daily_plan")
    op.drop_table("user")
    op.drop_table("project")
    # ### end Alembic commands ###
