import { ISession } from "../shared/models/event.model";

export class VoterService {

    addVoter(session: ISession, voterName: string) {
        session.voters.push(voterName);
    }

    deleteVoter(session: ISession, voterName: string) {
        session.voters = session.voters.filter(voter => voter !== voterName);
    }

    userHasVoted(session: ISession, voterName: string): boolean {
        return session.voters.some(voter => voter === voterName);
    }

}