# If you come from bash you might have to change your $PATH.
# export PATH=$HOME/bin:/usr/local/bin:$PATH

# Path to your oh-my-zsh installation.
export ZSH=$HOME/.oh-my-zsh

# Set name of the theme to load --- if set to "random", it will
# load a random theme each time oh-my-zsh is loaded, in which case,
# to know which specific one was loaded, run: echo $RANDOM_THEME
# See https://github.com/ohmyzsh/ohmyzsh/wiki/Themes
ZSH_THEME="awesomepanda"

# Which plugins would you like to load?
# Standard plugins can be found in $ZSH/plugins/
# Custom plugins may be added to $ZSH_CUSTOM/plugins/
# Example format: plugins=(rails git textmate ruby lighthouse)
# Add wisely, as too many plugins slow down shell startup.
plugins=(
    git 
    envrc
    git-extras
    history
    docker
    docker-compose
    sudo
    systemd
    zsh-autosuggestions
    zsh-syntax-highlighting
)

DISABLE_AUTO_UPDATE=true
DISABLE_UPDATE_PROMPT=true

countdown() {
    secs=$1
    while [ $secs -gt 0 ]; do
        echo -ne "Sleeping for $secs seconds...\033[0K\r"
        sleep 1
        : $((secs--))
    done
    echo "Sleeping for 0 seconds... Done."
}

source $ZSH/oh-my-zsh.sh