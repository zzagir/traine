import { info } from '../../travels'
import InfoLayout from '../../components/InfoLayout/InfoLayout'

const InfoPage = () => {
	let i = 0
	return (
		<div style={{ height: '100%' }}>
			<InfoLayout
				firstText={info[i].firstText}
				img={info[i].img}
				infoDescription={info[i].infoDescription}
				infoText={info[i].infoText}
				secondText={info[i].secondText}
				thirdText={info[i].thirdText}
			/>
		</div>
	)
}

export default InfoPage
