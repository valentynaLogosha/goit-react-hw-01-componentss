
import user from 'user.json';
import { Profile } from "components/Profile";

import data from 'data.json';
import { Statistics } from "../Statistics";

import friends from 'friends.json'
import { FriendList } from "../FriendList";

import transactions from 'transactions.json'
import { TransactionHistory } from "../TransactionHistory";


import { Container } from "./App.styled";

export const App = () => {
  return (
    <Container >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <Statistics
        title="UPLOAD STATS"
        stats={data}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </Container>
  );
};