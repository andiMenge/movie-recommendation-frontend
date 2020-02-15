import React from 'react';
import ActionGenre from './action/action';
import AdventureGenre from './adventure/adventure';
import ComedyGenre from './comedy/comedy';
import DramaGenre from './drama/drama';
import AnimationGenre from './animation/animation';
import CrimeGenre from './crime/crime';
import DocumentaryGenre from './documentary/documentary';
import FamilyGenre from './family/family';
import FantasyGenre from './fantasy/fantasy';
import HistoryGenre from './history/history';
import HorrorGenre from './horror/horror';
import MusicGenre from './music/music';
import MysteryGenre from './mystery/mystery';
import RomanceGenre from './romance/romance';
import ScienceFictionGenre from './scienceFiction/scienceFiction';
import TvMovieGenre from './tvMovie/tvMovie';
import ThrillerGenre from './thriller/thriller';
import WarGenre from './war/war';

function GenreDropdown(props: any) {
  const onFilter = (event: any) => {
    props.filterByGenre(event.target.id);
    props.setIsFiltered(true);
  };

  return (
    <div className="dropdown">
      <button
        className="btn btn-secondary dropdown-toggle bg mr-1"
        type="button"
        id="genreDropdown"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        Genre
      </button>
      <div className="dropdown-menu" aria-labelledby="genreDropdown">
        <ActionGenre onFilter={onFilter} />
        <AdventureGenre onFilter={onFilter} />
        <ComedyGenre onFilter={onFilter} />
        <DramaGenre onFilter={onFilter} />
        <AnimationGenre onFilter={onFilter} />
        <CrimeGenre onFilter={onFilter} />
        <DocumentaryGenre onFilter={onFilter} />
        <FamilyGenre onFilter={onFilter} />
        <FantasyGenre onFilter={onFilter} />
        <HistoryGenre onFilter={onFilter} />
        <HorrorGenre onFilter={onFilter} />
        <MusicGenre onFilter={onFilter} />
        <MysteryGenre onFilter={onFilter} />
        <RomanceGenre onFilter={onFilter} />
        <ScienceFictionGenre onFilter={onFilter} />
        <TvMovieGenre onFilter={onFilter} />
        <ThrillerGenre onFilter={onFilter} />
        <WarGenre onFilter={onFilter} />
      </div>
    </div>
  );
}

export default GenreDropdown;
