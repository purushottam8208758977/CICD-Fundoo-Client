import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { withStyles } from '@material-ui/core/styles';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const styles = theme => ({
    root: {
        display: 'flex',
    },
    paper: {
        marginRight: theme.spacing.unit * 2,
    },
});

export class MoreButton extends Component {

    constructor() {
        super()
        this.classes = styles.bind(this);
    }
    state = {
        open: false,
    };

    handleToggle = () => {
        this.setState(state => ({ open: !state.open }));
    };

    handleClose = event => {
        if (this.anchorEl.contains(event.target)) {
            return;
        }

        this.setState({ open: false });
    };

    render() {

        const { open } = this.state;

        return (
            <div className={this.classes.root}>
                <Paper className={this.classes.paper}>

                </Paper>
                <div>
                    <Button
                        buttonRef={node => {
                            this.anchorEl = node;
                        }}
                        aria-owns={open ? 'menu-list-grow' : undefined}
                        aria-haspopup="true"
                        onClick={this.handleToggle}
                    >
                       
                    </Button>
                    <Popper open={open} anchorEl={this.anchorEl} transition disablePortal>
                        {({ TransitionProps, placement }) => (
                            <Grow
                                {...TransitionProps}
                                id="menu-list-grow"
                                style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                            >
                                <Paper>
                                    <ClickAwayListener onClickAway={this.handleClose}>
                                        <MenuList>
                                            <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                                            <MenuItem onClick={this.handleClose}>My account</MenuItem>
                                            <MenuItem onClick={this.handleClose}>Logout</MenuItem>
                                        </MenuList>
                                    </ClickAwayListener>
                                </Paper>
                            </Grow>
                        )}
                    </Popper>
                </div>
            </div>
        );
    }
}

MoreButton.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MoreButton);


