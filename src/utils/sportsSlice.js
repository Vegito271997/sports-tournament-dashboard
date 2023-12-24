import { createSlice } from "@reduxjs/toolkit";

const sportsSlice = createSlice({
  name: "sports",
  initialState: {
    sport: [],
    type: "",
  },
  reducers: {
    addSports: (state, action) => {
      const { data, isUpdate } = action.payload;
      if (isUpdate) {
        // Prepend the new player to the players array
        const { gameIndex, teamIndex, name, age } = data;

        state.sport = state.sport.map((game, i) =>
          i === gameIndex
            ? {
                ...game,
                teams: game.teams.map((team, j) =>
                  j === teamIndex
                    ? {
                        ...team,
                        players: [
                          {
                            name,
                            age,
                          },
                          ...team.players, // existing players
                        ],
                      }
                    : team
                ),
              }
            : game
        );
      } else {
        state.sport = data;
      }

      //state.sport = action.payload;
    },
    addType: (state, action) => {
      state.type = action.payload;
    },
  },
});

export const { addSports } = sportsSlice.actions;

export default sportsSlice.reducer;
